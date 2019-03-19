export interface CardInterface {
   id: string;
   playerName: string;
   cardCompany: string;
   cardSet: string;
   year: number;
   sport: string;
   team: string;
   rookieCard: boolean;
   auto: boolean;
   relic: boolean;
   relicType?: string;
   numbered: boolean;
   numberedTo?: number;
   imageLink?: string;
}
