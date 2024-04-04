import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { logout } from "@/features/authSlice";
import { DeleteUser, ShowUser } from "@/services/userService";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Profile() {
  const [user, setUser] = useState(""); // Initialiser l'état de l'e-mail
  const [userFirstName, setUserFirstName] = useState(user.first_name);
  const [error, setError] = useState(null);
  const userName = user.first_name + " " + user.last_name;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await ShowUser();
      setUser(userData);
    };

    fetchUser();
  }, []);

  console.log(user);
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
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle>Welcome {userName}</CardTitle>
        <CardDescription>You can edit your profile here</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder={user.email} />
          </div>
        </div>
        <div className="flex flex-row mt-6 justify-between">
          <div>
            <Button size="sm" variant="outline">
              Validate
            </Button>
          </div>
          <div className="flex gap-3">
            <Button size="sm" variant="outline">
              Change password
            </Button>
            <Button onClick={() => handleDeleteUser(user.id)} size="sm">
              Delete account
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
