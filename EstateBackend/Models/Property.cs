namespace EstateBackend.Models
{
    public class Property
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Location { get; set; }
        public int Price { get; set; }
        public int Bedrooms { get; set; }
        public string? ImageUrl { get; set; }
    }
}