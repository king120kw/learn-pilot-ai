import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase, GraduationCap, Edit, Github, Linkedin, Twitter } from "lucide-react"

interface ProfileHeaderProps {
  userData: {
    name: string
    email: string
    role: string
    joinDate: string
    profileImage: string
    bio: string
    location: string
    education: string
    socialLinks: {
      github: string
      linkedin: string
      twitter: string
    }
  }
}

export function ProfileHeader({ userData }: ProfileHeaderProps) {
  return (
    <Card className="overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-400"></div>
      <CardContent className="relative px-6 pb-6 pt-0">
        <div className="flex flex-col items-center sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col items-center sm:flex-row sm:items-end">
            <div className="-mt-16 overflow-hidden rounded-full border-4 border-white bg-white">
              <Image
                src={userData.profileImage || "/placeholder.svg"}
                alt={userData.name}
                width={128}
                height={128}
                className="h-32 w-32 object-cover"
              />
            </div>
            <div className="mt-4 text-center sm:ml-6 sm:mt-0 sm:text-left">
              <h2 className="text-2xl font-bold text-gray-900">{userData.name}</h2>
              <p className="text-gray-600">{userData.email}</p>
              <div className="mt-2 flex flex-wrap justify-center gap-2 sm:justify-start">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Briefcase className="h-3 w-3" />
                  {userData.role}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Joined {userData.joinDate}
                </Badge>
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="mt-4 sm:mt-0">
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="mb-2 text-lg font-medium text-gray-900">About</h3>
            <p className="text-gray-600">{userData.bio}</p>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-6">
              {userData.location && (
                <div className="flex items-center text-gray-600">
                  <MapPin className="mr-2 h-4 w-4 text-gray-400" />
                  {userData.location}
                </div>
              )}
              {userData.education && (
                <div className="flex items-center text-gray-600">
                  <GraduationCap className="mr-2 h-4 w-4 text-gray-400" />
                  {userData.education}
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">Connect</h3>
            <div className="flex flex-col gap-2">
              {userData.socialLinks.github && (
                <a
                  href={`https://${userData.socialLinks.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <Github className="mr-2 h-4 w-4" />
                  {userData.socialLinks.github}
                </a>
              )}
              {userData.socialLinks.linkedin && (
                <a
                  href={`https://${userData.socialLinks.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  {userData.socialLinks.linkedin}
                </a>
              )}
              {userData.socialLinks.twitter && (
                <a
                  href={`https://${userData.socialLinks.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  {userData.socialLinks.twitter}
                </a>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
