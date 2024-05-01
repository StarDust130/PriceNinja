import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Home = () => {
  return (
    <>
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Introduction */}
          <div className="text-center md:text-left">
            <h4 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Our Website
            </h4>
            <p className="text-lg text-gray-600 mb-6">
              Explore our exciting courses and start learning today!
            </p>
            <div className="mb-4"></div>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="text" placeholder="Enter product link" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>

          {/* Right Section: Course Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Featured Course
            </h2>
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Course Name
                </h3>
                <p className="text-sm text-gray-600">By Author Name</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Brief description of the featured course goes here. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-600 font-bold">
              Learn More <span className="ml-1">&#8594;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
