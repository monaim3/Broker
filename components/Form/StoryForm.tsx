"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

// Agent Data
const agentData = {
  id: 1,
  name: "Ahmed Rahman",
  image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  successRate: 92,
  isFraud: false,
  fee: "$2,500 - $3,500",
  countries: ["Canada", "Australia", "UK"],
  contactNumber: "+880-1711-123456",
  rating: 4.5,
  totalReviews: 124,
};

type FormData = {
  name: string;
  contactNumber: string;
  preferredCountry: string;
  message: string;
  userRating: number; // New field added

};

export default function ConsultationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: agentData.name,
      contactNumber: agentData.contactNumber,
      userRating: 0,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", data);
  };

  // Render agent's current rating
  const renderAgentStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`agent-full-${i}`} className="text-yellow-500 fill-yellow-500" size={20} />
        ))}
        {hasHalfStar && <Star className="text-yellow-500" fill="none" size={20} />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`agent-empty-${i}`} className="text-gray-300" size={20} />
        ))}
      </div>
    );
  };

  // Allow user to select rating
  const handleUserRating = (rating: number) => {
    setValue("userRating", rating);
  };

  const renderUserRatingInput = () => {
    return (
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((starValue) => (
          <button
            key={starValue}
            type="button"
            onClick={() => handleUserRating(starValue)}
          >
            <Star
              className={
                starValue <= watch("userRating")
                  ? "text-yellow-500 fill-yellow-500"
                  : "text-gray-300"
              }
              size={24}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="flex justify-center py-10 px-4">
      <Card className="w-full max-w-xl shadow-xl rounded-2xl">
        <CardContent className="p-6 space-y-6">
          {/* Agent Info */}
          <div className="flex items-center gap-4">
            <img
              src={agentData.image}
              alt={agentData.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="font-bold text-lg">{agentData.name}</h2>
              <div className="flex items-center gap-2">
                {renderAgentStars(agentData.rating)}
                <span className="text-sm text-gray-500">({agentData.totalReviews} reviews)</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="contactNumber">Contact Number</Label>
              <Input
                id="contactNumber"
                {...register("contactNumber", {
                  required: "Contact number is required",
                })}
              />
              {errors.contactNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contactNumber.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="preferredCountry">Preferred Country</Label>
              <select
                id="preferredCountry"
                {...register("preferredCountry", {
                  required: "Please select a country",
                })}
                className="w-full mt-1 border rounded px-3 py-2"
              >
                <option value="">Select Country</option>
                {agentData.countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.preferredCountry && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.preferredCountry.message}
                </p>
              )}
            </div>

            <div>
              <Label>Rate this agent</Label>
              {renderUserRatingInput()}
              {errors.userRating?.message && (
                <p className="text-red-500 text-sm mt-1">{errors.userRating.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={4}
                {...register("message")}
                className="w-full mt-1"
              />
            </div>

            <Button
              type="submit"
              className="w-full text-white"
              style={{
                background: "linear-gradient(to right, #56DFCF, #ADEED9)", 
              }}
            >
              Submit Request
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}