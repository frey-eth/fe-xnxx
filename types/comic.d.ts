interface ComicDetail {
  title: string;
  banner: string;
  status: string;
  description: string;
  genre: string[];
}

interface TotalLikes {
  num_of_like: number;
  users: string[]; // Assuming users are stored as an array of user IDs or usernames
}

interface Comic {
  _id: string;
  comic_detail: ComicDetail;
  totalViews: number;
  totalLikes: TotalLikes;
  num_of_chapters: number;
}
