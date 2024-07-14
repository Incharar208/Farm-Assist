import { Link } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
const UnAuthAlert = () => (
  <Alert variant="destructive">
    <AlertCircle className="h-4 w-4" />
    <AlertTitle>Authentication Required</AlertTitle>
    <AlertDescription>
      Please{" "}
      <Link
        to={"/auth.register?redirectTo=/crop.CropYield.ai"}
        className="underline"
      >
        Sign up
      </Link>{" "}
      or{" "}
      <Link
        to={"/auth.login?redirectTo=/crop.CropYield.ai"}
        className="underline"
      >
        Login
      </Link>{" "}
      to use Crop Yield AI.
    </AlertDescription>
  </Alert>
);

<<<<<<< HEAD
export default UnAuthAlert;
=======
export default UnAuthAlert;
>>>>>>> 8e76f0fe4b5144f0ee5d9a46ab87ede40ee232e1
