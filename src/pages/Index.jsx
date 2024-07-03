import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Index = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover w-[600px] h-[400px]" />
        <h1 className="text-5xl font-bold">Discover the Future of Driving</h1>
        <p className="text-xl">Experience innovation and performance like never before</p>
        <Button size="lg">Learn More</Button>
      </section>

      {/* About Section */}
      <section id="about" className="space-y-4">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p>We are a leading car manufacturer dedicated to bringing you the best in automotive technology and design.</p>
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover w-[600px] h-[400px]" />
      </section>

      {/* Models Section */}
      <section id="models" className="space-y-4">
        <h2 className="text-3xl font-bold">Our Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index}>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover w-[300px] h-[200px]" />
              <CardHeader>
                <CardTitle>Model {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Experience the best in class with Model {index + 1}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="space-y-4">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Name" {...register("name")} />
          <Input placeholder="Email" {...register("email")} />
          <Textarea placeholder="Message" {...register("message")} />
          <Button type="submit">Submit</Button>
        </form>
        <div>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@carbrand.com</p>
        </div>
      </section>
    </div>
  );
};

export default Index;