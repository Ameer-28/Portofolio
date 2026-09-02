import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { IconButton } from "@/components/ui/icon-button";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";
import { profileData } from "@/data/profile";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-10 transition-colors">
      <Container
        size="lg"
        className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
      >
        {/* Left: Brand, Title, and Copyright */}
        <div className="space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Link
              href="/"
              className="font-mono text-sm font-bold text-foreground hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              {profileData.brandName}
            </Link>
            <span className="text-muted-foreground text-xs">·</span>
            <span className="text-xs text-muted-foreground font-medium">
              {profileData.primaryRole}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {currentYear} {profileData.fullName}. All rights reserved.
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-2">
          {profileData.social.github && (
            <IconButton
              variant="ghost"
              size="sm"
              href={profileData.social.github}
              isExternal
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-4 w-4" />
            </IconButton>
          )}

          {profileData.social.linkedin && (
            <IconButton
              variant="ghost"
              size="sm"
              href={profileData.social.linkedin}
              isExternal
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-4 w-4" />
            </IconButton>
          )}

          {profileData.social.instagram && (
            <IconButton
              variant="ghost"
              size="sm"
              href={profileData.social.instagram}
              isExternal
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="h-4 w-4" />
            </IconButton>
          )}

          {profileData.social.email && (
            <IconButton
              variant="ghost"
              size="sm"
              href={`mailto:${profileData.social.email}`}
              isExternal
              aria-label="Send Email"
            >
              <Mail className="h-4 w-4" />
            </IconButton>
          )}
        </div>
      </Container>
    </footer>
  );
}
