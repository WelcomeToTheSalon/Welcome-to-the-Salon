export default function Home() {
  return (
    <main className="min-h-screen bg-cream flex flex-col items-center px-6 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl font-serif text-soft-brown mb-4">
          Connect. Share. Grow.
        </h1>
        <p className="text-lg text-light-brown mb-6">
          A marketplace and community for women entrepreneurs, gig workers, and small business owners.
        </p>
        <button className="bg-blush-pink text-white px-6 py-3 rounded-lg hover:bg-deeper-pink transition">
          Post a Listing
        </button>
      </section>

      {/* Categories Section */}
      <section className="mt-16 w-full max-w-4xl">
        <h2 className="text-3xl font-serif text-soft-brown mb-6 text-center">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          <div className="p-4 bg-light-cream rounded-lg shadow-md hover:shadow-lg transition">Jobs</div>
          <div className="p-4 bg-light-cream rounded-lg shadow-md hover:shadow-lg transition">Services</div>
          <div className="p-4 bg-light-cream rounded-lg shadow-md hover:shadow-lg transition">Businesses</div>
          <div className="p-4 bg-light-cream rounded-lg shadow-md hover:shadow-lg transition">Referrals</div>
          <div className="p-4 bg-light-cream rounded-lg shadow-md hover:shadow-lg transition">Recommendations</div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="mt-16 max-w-3xl text-center">
        <h2 className="text-3xl font-serif text-soft-brown mb-6">How It Works</h2>
        <ol className="list-decimal list-inside text-light-brown space-y-2">
          <li>Sign up or browse listings</li>
          <li>Post your business or opportunity</li>
          <li>Connect and collaborate with others</li>
          <li>Grow your network and business</li>
        </ol>
      </section>

      {/* Listings Feed Section */}
      <section className="mt-16 w-full max-w-5xl">
        <h2 className="text-3xl font-serif text-soft-brown mb-6 text-center">Latest Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder Cards */}
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-soft-brown mb-2">Graphic Design Services</h3>
            <p className="text-light-brown mb-2">By Jane Doe — Los Angeles, CA</p>
            <p className="text-light-brown text-sm">Professional branding and illustration services for women-owned businesses.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-soft-brown mb-2">Handmade Jewelry</h3>
            <p className="text-light-brown mb-2">By Sarah Lee — New York, NY</p>
            <p className="text-light-brown text-sm">Elegant, handcrafted jewelry designed for female entrepreneurs who love style.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-soft-brown mb-2">Virtual Assistant</h3>
            <p className="text-light-brown mb-2">By Emily Smith — Remote</p>
            <p className="text-light-brown text-sm">Experienced VA ready to support women-owned startups and small businesses.</p>
          </div>
          {/* You can copy/paste these cards to add more */}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mt-16 text-center">
        <button className="bg-blush-pink text-white px-6 py-3 rounded-lg hover:bg-deeper-pink transition">
          Join the Community
        </button>
      </section>
    </main>
  );
}
