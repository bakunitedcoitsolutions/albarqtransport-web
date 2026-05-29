# Public API Documentation (Auth-Free)

All public routes use the **GET** method and return non-paginated, active records sorted by their display order.

## Base URL: `/api/public`

---

### **Banners**
- **Endpoint**: `/banners`
- **Description**: Returns all active banners.

### **Blogs**
- **Endpoint**: `/blogs`
- **Parameters**: 
  - `type=home`: Returns the latest 3 active blogs.
  - (No parameter): Returns all active blogs.
- **Description**: Returns active blog posts and updates.

### **Certificates**
- **Endpoint**: `/certificates`
- **Description**: Returns all active legal/professional certificates.

### **Clients**
- **Endpoint**: `/clients`
- **Description**: Returns all active client logos and names.

### **Fleet**
- **Endpoint**: `/fleet`
- **Description**: Returns active fleet items (up to 5 items).

### **Reviews**
- **Endpoint**: `/reviews`
- **Description**: Returns all active client reviews (testimonials).

### **Videos**
- **Endpoint**: `/videos`
- **Description**: Returns the single latest active video record (not an array).
