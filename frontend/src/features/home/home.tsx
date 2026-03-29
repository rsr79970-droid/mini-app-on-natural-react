import { useDeleteUser } from "../../shared/hooks/use-delete-user";
import { useFetchUsers } from "../../shared/hooks/use-fetch-users";
import { Button } from "../../shared/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../shared/ui/table";
import { AddUser } from "../creare-form";
import EditUser from "../update-form";

const HomePage = () => {
  const { users, isLoading, error, refetch } = useFetchUsers();
  const { deleteUser } = useDeleteUser();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <div className="flex justify-between items-center my-5">
        <h2 className="text-2xl font-semibold">Users</h2>
        <AddUser onSuccess={refetch} />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>№</TableHead>
            <TableHead>First name</TableHead>
            <TableHead>Last name</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Password</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user._id}</TableCell>

              <TableCell>{user.name.firstname}</TableCell>
              <TableCell>{user.name.lastname}</TableCell>

              <TableCell>{(user as any).username}</TableCell>

              <TableCell>{user.email}</TableCell>

              <TableCell>{"••••••••"}</TableCell>

              <TableCell>{user.phone}</TableCell>

              <TableCell className="flex gap-2">
                <EditUser user={user} onSuccess={refetch} />

                <Button
                  variant="destructive"
                  onClick={async () => {
                    const ok = await deleteUser(user._id);
                    if (ok) refetch();
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HomePage;
