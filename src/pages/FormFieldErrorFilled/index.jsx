import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Text, Input, Heading } from "../../components";

export default function FormFieldErrorFilledPage() {
  return (
    <>
      <Helmet>
        <title>Registration Error - Correct Your Details</title>
        <meta
          name="description"
          content="Encountered an error in your registration? Enter a valid email address to complete your sign-up process and access a world of opportunities."
        />
      </Helmet>

      {/* form container section */}
      <div className="flex w-full flex-col bg-white-A700 pt-[31px] sm:pt-5">
        <div className="container-xs flex flex-col items-center px-5 md:p-5">
          {/* header row section */}
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img src="images/img_frame_1261155216.svg" alt="image frame" className="h-[47px] w-[10%]" />
            <Button size="sm" variant="outline" shape="circle" className="w-[64px] !rounded-[32px]">
              <Img src="images/img_close.svg" />
            </Button>
          </div>
          <div className="mt-[41px] flex w-[44%] flex-col items-center gap-[61px] md:w-full sm:gap-[30px]">
            {/* form title section */}
            <div className="flex flex-col items-center self-stretch">
              <Text size="4xl" as="p" className="!font-coveredbyyourgrace tracking-[-0.72px] !text-green-600">
                Registration Form
              </Text>
              <Heading as="h1" className="relative mt-[-1px] w-full text-center leading-[120%] tracking-[-1.12px]">
                Start your success Journey here!
              </Heading>
            </div>
            <div className="flex w-[71%] flex-col gap-[47px] md:w-full">
              {/* input fields section */}
              <div className="flex flex-col gap-6">
                <Input
                  shape="round"
                  name="Name Input"
                  placeholder={`Aneesh Karthikeyan`}
                  className="border-black-900_05 !text-black-900 sm:px-5"
                />
                <div className="flex flex-col items-start gap-3">
                  <Input
                    color="gray_50"
                    shape="round"
                    name="Username Input"
                    placeholder={`Aneesh1996`}
                    className="self-stretch border-indigo-A200 sm:px-5"
                  />
                  <div className="flex items-center gap-[7px]">
                    <Img src="images/img_video_camera.svg" alt="video camera icon" className="h-[20px] w-[20px]" />
                    <Text size="s" as="p" className="!text-red-A700">
                      Enter a valid email address
                    </Text>
                  </div>
                </div>
              </div>

              {/* submit button section */}
              <Button shape="round" color="gray_900_02_gray_800" className="w-full font-semibold capitalize sm:px-5">
                Submit
              </Button>
            </div>
          </div>

          {/* footer image section */}
          <Img
            src="images/img_path70.svg"
            alt="path image"
            className="mr-[93px] mt-[4118px] h-[21px] w-[9%] self-end md:mr-0"
          />
        </div>
      </div>
    </>
  );
}
