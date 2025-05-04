import { Entity } from "@/domain/entities/entity"
import { UniqueEntityID } from "@/domain/entities/unique-entity-id"
 
interface AnswerProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content
  }
}