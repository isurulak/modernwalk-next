import * as React from "react";
import { Section, Image, Typography, Button } from "@/designSystem/atoms";
import StatCard from "./StatCard";

export default function HeroSection() {
  return (
    <Section className="bg-muted pb-0">
      <div className="flex gap-[60px]">
        {/* Left Container */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Top Section - Content */}
          <div className="flex flex-col gap-4 mb-16">
            <Typography variant="display">
              Redefining Fashion <br />
              with Modern Walk
            </Typography>
            <Typography variant="body" className="text-muted-foreground">
              Step into timeless fashion made for today’s lifestyle.
            </Typography>
            <div>
              <Button colorVariant="primary" size="medium">
                Shop Now
              </Button>
            </div>
          </div>

          {/* Bottom Section - Stats */}
          <div className="flex items-center gap-6">
            <StatCard value="200+" label="International Brands" />
            <div className="h-16 border-l border-border" />
            <StatCard value="2,000+" label="High-Quality Products" />
            <div className="h-16 border-l border-border" />
            <StatCard value="30,000+" label="Happy Customers" />
          </div>
        </div>

        {/* Right Container - Hero Image */}
        <div className="flex-1 relative h-[646px]">
          <div className="absolute h-[646px] w-[calc(50vw-40px)]">
            <Image
              src="/hero_image.png"
              alt="Hero Image - Fashion Models"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
