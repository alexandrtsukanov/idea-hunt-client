import { Job } from "../types/platform";

export const getOwnJobs = (jobs: Job[], authUserId: number | undefined) => {
    if (authUserId === undefined) {
        return [];
    }
    return jobs.filter(job => job.team.project.author_id === authUserId);
}