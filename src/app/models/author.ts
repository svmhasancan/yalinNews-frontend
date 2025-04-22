export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  biography: string;
  imageUrl: string;
  isActive: boolean;
}

/*
public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string? Biography { get; set; }  // nullable olabilir
        public string? ImageUrl { get; set; }   // nullable olabilir
        public bool IsActive { get; set; } = true;
*/
