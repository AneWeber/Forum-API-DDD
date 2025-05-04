import { Entity } from "@/domain/entities/entity"
import { Slug } from "./value-objects/slug"
import { UniqueEntityID } from "@/domain/entities/unique-entity-id"
 
interface QuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
}