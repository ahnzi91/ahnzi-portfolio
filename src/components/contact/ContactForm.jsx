export default function ContactForm() {
  return (
    <form id="contactForm" className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1 font-medium">
          이름
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          name="name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">
          이메일
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          name="email"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1 font-medium">
          메시지
        </label>
        <textarea
          id="message"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          name="message"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-500"
      >
        이메일 보내기
      </button>
    </form>
  );
}
