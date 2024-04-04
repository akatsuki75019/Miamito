import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { logout } from "@/features/authSlice";
import { DeleteUser, ShowUser, UpdateUser } from "@/services/userService";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EditPassword from "./EditPassword";

export default function Profile() {
  const [user, setUser] = useState(""); // Initialiser l'état de l'e-mail
  const [userFirstName, setUserFirstName] = useState(user.first_name);
  const userName = user.first_name + " " + user.last_name;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await ShowUser();
      setUser(userData);
      setFirstName(userData.first_name);
      setLastName(userData.last_name);
      // setBirthday(userData.birthday);
    };

    fetchUser();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedUser = await UpdateUser(user.id, {
      first_name: firstName,
      last_name: lastName,
    });
    setUser(updatedUser);
  };

  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm(
      "Êtes-vous sûr de vouloir supprimer votre compte ?"
    );
    if (confirmDelete) {
      try {
        await DeleteUser(userId);
        dispatch(logout());
        window.location.href = "/";
      } catch (error) {
        setError("Échec de la suppression de l'utilisateur : " + error.message);
      }
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <main className="container">
      <div className="flex items-center justify-center">
        <Card className="w-full max-w-3xl mx-auto">
          <CardHeader className="space-y-1">
            <CardTitle>Welcome {userName}</CardTitle>
            <CardDescription>You can edit your profile here</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="mb-6">
                    <div className="mb-6">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    disabled
                    id="email"
                    type="email"
                    placeholder={user.email}
                  />
                </div>
              </div>
              <div className="flex flex-row mt-6 justify-between">
                <div>
                  <Button type="submit" size="sm" variant="outline">
                    Update
                  </Button>
                </div>
                <div className="flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline">
                        Change password
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit your password</DialogTitle>
                        <DialogDescription>
                          Here you can edit your password
                        </DialogDescription>
                      </DialogHeader>
                      <EditPassword />
                    </DialogContent>
                  </Dialog>
                  <Button onClick={() => handleDeleteUser(user.id)} size="sm">
                    Delete account
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
