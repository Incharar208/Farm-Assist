 "use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import * as React from "react";
import { useAuth } from "@/components/contexts/Auth";
import { HashLink } from "react-router-hash-link";
import UnAuthAlert from "./Auth";
// import ResultAccordian from "./Prediction";
import { FormEvent, useState } from "react";

const Disease = () => {
  const { USER } = useAuth();
  const [AI_Loading, set_AI_Loading] = useState(false);
  const [AI_Results, set_AI_Results] = useState<any>(null);
  const [selectedPlant, setSelectedPlant] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const plants = ["Wheat", "Rice", "Mango", "Corn", "Coffee"];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const formOnSubmit = async (event: FormEvent) => {
    event.preventDefault();
    set_AI_Loading(true);

    // Simulating AI processing
    await new Promise((res) => setTimeout(res, 5000));

    // Set the AI result for display
    set_AI_Results({
      diseaseName: "Example Disease",
      diseaseDescription: "This is a description of the disease.",
    });
    
    set_AI_Loading(false);
  };

  const handlePlantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlant(e.target.value);
  };

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Crop Disease AI</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav className="grid text-sm text-muted-foreground">
          <HashLink className="hover:bg-accent p-1.5" smooth to={"#AI"}>
            Plant and Image
          </HashLink>
          <HashLink className="hover:bg-accent p-1.5" smooth to={"#DSA"}>
            Results
          </HashLink>
        </nav>
        <div className="grid gap-6">
          <div className="grid gap-1">
            <span id="AI" className="dummy-navigator relative -top-20"></span>
            {!USER && <UnAuthAlert />}
            <Card>
              <CardHeader>
                <CardTitle>Find out the disease of your plant</CardTitle>
                <div style={{ marginTop: '20px' }}></div>
                <CardDescription>
                  <strong>Choose the plant</strong>
                </CardDescription>
                <div className="dropdown" style={{ width: '50%', textAlign: 'center' }}>
                  <select value={selectedPlant} onChange={handlePlantChange} style={{ width: '100%', textAlign: 'center' }}>
                    <option value="" disabled>Select Plant</option>
                    {plants.map((plant, index) => (
                      <option key={index} value={plant}>
                        {plant}
                      </option>
                    ))}
                  </select>
                </div>
                <div style={{ marginTop: '20px' }}></div>
                <div className="upload">
                  <h3><strong>Upload Image</strong></h3>
                </div>
                <div className="upload" style={{ width: '50%', textAlign: 'center' }}>
                  <Input type="file" accept="image/*" onChange={handleImageUpload} style={{ width: '100%' }} />
                </div>
              </CardHeader>
              <form onSubmit={formOnSubmit}>
                <CardFooter className="border-t px-6 py-4">
                  {USER && <Button type="submit">Find Disease</Button>}
                </CardFooter>
              </form>
            </Card>
            {(AI_Results || AI_Loading) && (
              <Card>
                <CardHeader>
                  <CardTitle>Results</CardTitle>
                  <div style={{ marginTop: '20px' }}></div>
                  <CardDescription>
                    {AI_Loading && (
                      <div className="w-full flex justify-center">
                        <Loader2 className="h-10 w-10 animate-spin" />
                      </div>
                    )}
                    {!AI_Loading && AI_Results && (
                      <div>
                        <p><strong>Disease:</strong> {AI_Results.diseaseName}</p>
                        <div style={{ marginTop: '20px' }}></div>
                        <p>{AI_Results.diseaseDescription}</p>
                      </div>
                    )}
                  </CardDescription>
                </CardHeader>
              </Card>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Disease;

