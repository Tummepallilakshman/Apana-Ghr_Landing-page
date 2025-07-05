export function TestimonialSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-[#18181b]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#00796B] dark:text-white mb-8">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#23272f] p-6 rounded-lg shadow">
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">“ApanaGhr has made my home smarter and my life easier!”</p>
            <span className="font-semibold text-[#00796B] dark:text-white">— Priya S.</span>
          </div>
          <div className="bg-white dark:bg-[#23272f] p-6 rounded-lg shadow">
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">“The best platform for home automation. Highly recommended!”</p>
            <span className="font-semibold text-[#00796B] dark:text-white">— Rahul K.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
