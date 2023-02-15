﻿using System;
using Microsoft.AspNetCore.Identity;

namespace Whammy.Models
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}

