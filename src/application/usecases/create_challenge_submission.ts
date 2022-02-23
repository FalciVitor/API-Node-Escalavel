import { Submission } from "../../domain/entities/submission"
import { ChallengeRepository } from "../repositories/ChallengeRepository"
import { StudentRepository } from "../repositories/StudentRepository"

type CreateChallengeSubmissionRequest = {
    studentId: string,
    challengeId: string
}

export class CreateChallengeSubmission {
    constructor(
        private studentsRepository: StudentRepository,
        private challengeRepository: ChallengeRepository,
    ) {}

    async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest ){
        const student = await this.studentsRepository.findById(studentId)

        if (!student) {
            throw new Error('Students does not exist.')
        }

        const challenge = await this.challengeRepository.findById(challengeId)

        if (!challenge) {
            throw new Error('Challenge does not exist.')
        }
        
        const submission = Submission.create({
            studentId,
            challengeId
        })

        return submission
    }
}