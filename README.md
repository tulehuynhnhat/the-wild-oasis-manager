# The Wild Oasis Manager

Internal hotel management application with a dashboard for managing bookings, guests, cabins and viewing statistics.

## Features

### Authentication

- Secure login for hotel employees
- New user accounts can only be created from within the application
- User profile: Upload and update avatar, Update name and password

- Table view of all cabins displaying cabin's data
- Create new cabins with photo upload
- Update existing cabin details
- Delete cabins

### Booking & Check In/Out

- Table view of all bookings with:
  - Arrival and departure dates
  - Booking status
  - Paid amount
  - Cabin and guest information
- Booking statuses:
  - Unconfirmed (booked but not checked in)
  - Checked in
  - Checked out
- Filter bookings by status
- Additional booking details:
  - Number of guests
  - Number of nights
  - Guest observations
  - Breakfast booking and breakfast price
- Booking actions:
  - Delete bookings
  - Check in guests
  - Check out guests
- Payment confirmation during check-in for unpaid bookings
- Ability to add breakfast at check-in if not previously booked

### Guest

- Guest data includes:
  - Full name
  - Email address
  - National ID
  - Nationality
  - Country flag for easy identification

### Dashboard & Statistics

- Dashboard is the initial screen of the application
- View metrics for the last:
  - 7 days
  - 30 days
  - 90 days
- Daily list of guests checking in and out with quick actions
- Key statistics:
  - Recent bookings
  - Sales
  - Check-ins
  - Occupancy rate
- Sales chart:
  - Total daily sales
  - Extras sales (currently breakfast)
- Stay duration statistics chart

### Setting

- Application-wide configuration options:
  - Breakfast price
  - Minimum nights per booking
  - Maximum nights per booking
  - Maximum guests per booking

### User interface & Experience

- Dark mode support
- Mobile-optimized UI for quick review and essential actions
