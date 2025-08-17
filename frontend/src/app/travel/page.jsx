"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { CommonCard, CardGrid } from "@/components/common/CardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Calendar, Plus } from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { setSelectedCategory, fetchTravelData } from "@/store/travelSlice";

export default function TravelPage() {
  const dispatch = useDispatch();
  const { travelData, categories, selectedCategory } = useSelector(
    (state) => state.travel
  );

  useEffect(() => {
    dispatch(fetchTravelData());
  }, [dispatch]);

  const filteredExperiences =
    selectedCategory === "All"
      ? travelData.data
      : travelData.data.filter((exp) => exp.category === selectedCategory);

  return (
    <div className="h-full overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Travel Journey</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exploring beautiful places across India and creating lasting
              memories. Here's a glimpse into my travel adventures and the
              stories behind them.
            </p>
          </div>

          {/* Loading State */}
          {travelData.loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="mt-2 text-muted-foreground">
                Loading travel experiences...
              </p>
            </div>
          )}

          {/* Category Filter */}
          {!travelData.loading && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  className="cursor-pointer transition-all hover:scale-105"
                  onClick={() => dispatch(setSelectedCategory(category))}
                >
                  {category}
                </Badge>
              ))}
            </div>
          )}

          {/* Travel Grid */}
          {!travelData.loading && (
            <CardGrid>
              {filteredExperiences.map((experience) => (
                <CommonCard
                  key={experience.id}
                  title={experience.destination}
                  badge={experience.category}
                  image={
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={experience.images[0]}
                        alt={experience.destination}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        width={500}
                        height={300}
                      />
                    </div>
                  }
                  content={
                    <div className="space-y-4">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.date}</span>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {experience.description}
                      </p>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">
                          Highlights:
                        </h4>
                        <ul className="space-y-1">
                          {experience.highlights
                            .slice(0, 3)
                            .map((highlight, index) => (
                              <li
                                key={index}
                                className="text-xs text-muted-foreground flex items-start gap-2"
                              >
                                <span className="text-primary mt-1 block w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                                {highlight}
                              </li>
                            ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Camera className="h-3 w-3" />
                          <span>
                            {experience.images.length} Photo
                            {experience.images.length > 1 ? "s" : ""}
                          </span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs">
                          View Details
                        </Button>
                      </div>
                    </div>
                  }
                />
              ))}
            </CardGrid>
          )}

          {/* Empty State */}
          {!travelData.loading && filteredExperiences.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                No travel experiences found for this category.
              </p>
            </div>
          )}

          {/* Add New Experience Button */}
          {!travelData.loading && (
            <div className="text-center mt-8">
              <Button variant="outline" className="mb-4">
                <Plus className="mr-2 h-4 w-4" />
                Add New Experience
              </Button>
              <p className="text-sm text-muted-foreground">
                More adventures are on the way! Stay tuned for new travel
                stories.
              </p>
            </div>
          )}

          {/* Travel Stats */}
          {!travelData.loading && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">
                  {filteredExperiences.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Places Visited
                </div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">2</div>
                <div className="text-sm text-muted-foreground">
                  States Explored
                </div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">
                  {filteredExperiences.reduce(
                    (acc, exp) => acc + exp.images.length,
                    0
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
                  Photos Captured
                </div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">∞</div>
                <div className="text-sm text-muted-foreground">
                  Memories Made
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
