import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Input, Heading, Text } from "../../components";
import { Link, useNavigate } from "react-router-dom";

export default function FormFieldEmptyPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Initialize email state with an empty string

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = /\S+@\S+\.\S+/.test(email);

    if (isValidEmail) {
      console.log("Email is valid. Redirecting to success page.");
      navigate("/success");
    } else {
      console.log("Email is not valid.");
      alert("Please enter a valid email address.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Register - Start Your Success Journey with Us</title>
        <meta
          name="description"
          content="Join our community and embark on a journey of success. Fill out the registration form to connect with top talent and kickstart your projects."
        />
      </Helmet>

      <div className="flex w-full flex-col bg-white-A700 pt-[31px] sm:pt-5">
        <div className="container-xs flex flex-col items-center px-5 md:p-5">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img
              src="images/img_frame_1261155216.svg"
              alt="image frame"
              className="h-[47px] w-[10%]"
            />
            <Link
              to="/website"
              size="sm"
              variant="outline"
              shape="circle"
              className="w-[64px] !rounded-[32px]"
            >
              <Img src="images/img_close.svg" />
            </Link>
          </div>

          <div className="mt-[41px] flex w-[44%] flex-col items-center gap-[61px] md:w-full sm:gap-[30px]">
            <div className="flex flex-col items-center self-stretch">
              <Text
                size="4xl"
                as="p"
                className="!font-coveredbyyourgrace tracking-[-0.72px] !text-green-600"
              >
                Registration Form
              </Text>
              <Heading
                as="h1"
                className="relative mt-[-1px] w-full text-center leading-[120%] tracking-[-1.12px]"
              >
                Start your success Journey here!
              </Heading>
            </div>
            <div className="flex w-[71%] flex-col gap-[47px] md:w-full">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <Input
                    shape="round"
                    type="text"
                    name="Name Input"
                    className="border-black-900_05"
                  />
                  <Input
                    shape="round"
                    type="email"
                    name="Email Input"
                    className="border-black-900_05"
                    value={email}
                    onChange={(e) => {
                      console.log(e); // Check if e is defined and inspect its properties
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    shape="round"
                    color="gray_900_02_gray_800"
                    className="w-full font-semibold capitalize sm:px-5"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <Img
            src="images/img_path70.svg"
            alt="decorative image"
            className="mr-[93px] mt-[4152px] h-[21px] w-[9%] self-end md:mr-0"
          />
        </div>
      </div>
    </>
  );
}
