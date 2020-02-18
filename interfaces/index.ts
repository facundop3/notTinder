export interface CandidateData {
  id: string;
  name: string;
  age: number;
  datingCity: string;
  hometown: string;
  company: string;
  school: string;
  description: string;
  pictures: any[];
}
export interface Candidate {
  data: CandidateData;
  opacities: {
    likeOpacity?: number;
    nopeOpacity?: number;
    superLikeOpacity?: number;
  };
}
