using Microsoft.AspNetCore.Mvc;
using EstateBackend.Models;
using System.Collections.Generic;

namespace EstateBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Property>> GetProperties()
        {
            var properties = new List<Property>
            {
                new Property { Id = 1, Title = "Modern Downtown Apartment", Location = "City Center", Price = 450000, Bedrooms = 2, ImageUrl = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500" },
                new Property { Id = 2, Title = "Suburban Family Home", Location = "Westside", Price = 750000, Bedrooms = 4, ImageUrl = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500" },
                new Property { Id = 3, Title = "Luxury Beachfront Villa", Location = "Coastal Bay", Price = 1250000, Bedrooms = 5, ImageUrl = "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500" }
            };
            return Ok(properties);
        }
    }
}