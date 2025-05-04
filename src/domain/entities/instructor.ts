import { Entity } from "@/domain/entities/entity"

interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps> {
}