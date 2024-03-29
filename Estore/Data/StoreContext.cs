﻿using Estore.Entities;
using Microsoft.EntityFrameworkCore;

namespace Estore.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Product> Products { get; set; }
    }
}
