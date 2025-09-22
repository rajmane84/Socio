import { useState } from "react";
import { X, Images, MapPin } from "lucide-react";
import { Avatar } from "../../components/avatar";

// Action button configs
const actions = [
  {
    title: "Images",
    icon: <Images className="hover:text-primary text-neutral-400" />,
  },
  {
    title: "Location",
    icon: <MapPin className="hover:text-primary text-neutral-400" />,
  },
];

// User type
type User = {
  id: string;
  name: string;
  username: string;
  avatar: string;
};

// Mock user data
const MOCK_USERS: User[] = [
  { id: "1", name: "Alice Johnson", username: "alice", avatar: "/avatar.webp" },
  { id: "2", name: "Bob Smith", username: "bob", avatar: "/avatar.webp" },
  {
    id: "3",
    name: "Charlie Brown",
    username: "charlie",
    avatar: "/avatar.webp",
  },
  { id: "4", name: "Diana Prince", username: "diana", avatar: "/avatar.webp" },
];

export default function NewPostUI() {
  const [search, setSearch] = useState<string>(""); // ✅ typed search state
  const [taggedUsers, setTaggedUsers] = useState<User[]>([]); // ✅ typed user state

  // Filter out already-tagged users
  const filteredUsers = MOCK_USERS.filter(
    (user) =>
      !taggedUsers.some((u) => u.id === user.id) &&
      (user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.username.toLowerCase().includes(search.toLowerCase())),
  );

  const handleAddUser = (user: User) => {
    setTaggedUsers((prev) => [...prev, user]);
    setSearch(""); // clear search after tagging
  };

  const handleRemoveUser = (id: string) => {
    setTaggedUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <header className="border-b-2 border-black py-2">
        <h1 className="font-heading text-center text-2xl font-semibold">
          New Post
        </h1>
      </header>

      {/* Image Preview Box */}
      <section className="mt-6 flex w-full flex-col overflow-hidden rounded-lg border-2 border-black bg-white">
        <div className="relative m-3 overflow-hidden rounded-lg border-2 border-black">
          <img
            src="/scenary.webp"
            alt="Scenic view"
            className="h-[280px] w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="bg-background flex h-16 items-center border-t-2 border-black px-4">
          <div className="flex items-center gap-4">
            {actions.map((action) => (
              <button
                key={action.title}
                type="button"
                aria-label={action.title}
                className="flex size-11 cursor-pointer items-center justify-center rounded-full border-2 border-transparent bg-white"
              >
                {action.icon}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Caption Input */}
      <section className="mt-2 flex flex-col gap-1">
        <label htmlFor="caption" className="font-semibold">
          Caption
        </label>
        <input
          type="text"
          id="caption"
          name="caption"
          placeholder="Photography Time...!!"
          autoComplete="off"
          className="rounded-md border-2 border-black px-4 py-2 placeholder:text-neutral-700"
        />
      </section>

      {/* Tag People */}
      <section className="mt-2 flex flex-col gap-2">
        <label htmlFor="tag-people" className="font-semibold">
          Tag people
        </label>

        <div className="relative">
          <input
            type="text"
            id="tag-people"
            name="tag-people"
            placeholder="Search here..."
            autoComplete="off"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-md border-2 border-black px-4 py-2 placeholder:text-neutral-700"
          />

          {/* Search Results */}
          {search && filteredUsers.length > 0 && (
            <div className="absolute right-0 bottom-full left-0 mb-1 flex flex-col gap-1 rounded-md border border-black bg-white p-2 shadow-lg">
              {filteredUsers.map((user) => (
                <button
                  key={user.id}
                  type="button"
                  onClick={() => handleAddUser(user)}
                  className="flex items-center gap-2 rounded-md p-2 hover:bg-neutral-100"
                >
                  <Avatar href={user.avatar} size="8" />
                  <span className="text-sm">
                    {user.name}{" "}
                    <span className="text-neutral-500">@{user.username}</span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Tagged Users */}
        <div className="mt-2 flex flex-wrap items-center gap-3">
          {taggedUsers.map((user) => (
            <div key={user.id} className="relative flex flex-col items-center">
              <Avatar href={user.avatar} size="12" />
              <span className="mt-1 text-xs font-medium text-neutral-700">
                @{user.username}
              </span>
              <button
                type="button"
                aria-label={`Remove ${user.username}`}
                onClick={() => handleRemoveUser(user.id)}
                className="absolute -top-1 -right-1 rounded-full bg-white p-0.5 hover:bg-neutral-100"
              >
                <X className="size-3" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
