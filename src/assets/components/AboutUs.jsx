import React from "react";
import { Heart, Users, Trophy, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[500px] flex flex-col justify-center items-center">
        <div className="absolute inset-0 flex justify-center">
          <div className=" bg-[url(https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80)] w-[90vw] h-full rounded-2xl md:rounded-3xl lg:rounded-4xl"></div>
        </div>
        <div className="relative container justify-center mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1.5, y: 0 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 120 }}
            className="max-w-2xl text-white px-4 md:px-6"
          >
            <h1
              id="imagestyle"
              className="text-4xl md:text-6xl lg:text-8xl font-bold mb-3 md:mb-6"
            >
              About Sahyog
            </h1>
            <p className="text-base md:text-lg lg:text-xl">
              Sahyog is Asia's most visited and trusted crowdfunding platform,
              helping people raise funds for medical emergencies, creative
              projects, and social causes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1.5, y: 0 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
          className="container mx-auto px-4"
        >
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center p-3">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#264653]">
                200K+
              </p>
              <p className="text-sm md:text-base text-gray-600 mt-1 md:mt-2">
                Fundraisers
              </p>
            </div>
            <div className="text-center p-3">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#264653]">
                55L+
              </p>
              <p className="text-sm md:text-base text-gray-600 mt-1 md:mt-2">
                Donors
              </p>
            </div>
            <div className="text-center p-3">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#264653]">
                $250M+
              </p>
              <p className="text-sm md:text-base text-gray-600 mt-1 md:mt-2">
                Raised
              </p>
            </div>
            <div className="text-center p-3">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#264653]">
                150+
              </p>
              <p className="text-sm md:text-base text-gray-600 mt-1 md:mt-2">
                Countries
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-10 md:py-16 bg-gray-50">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
              Our Mission
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              To build a global community that works together to create positive
              impact. We believe that everyone has the power to make a
              difference, and through crowdfunding, we can unite people around
              causes that matter.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-10 md:py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-[#264653]" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
                Support Causes
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Help individuals and organizations raise funds for medical
                emergencies, education, and social causes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-[#264653]" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
                Global Community
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Connect with donors and supporters from over 150 countries
                worldwide.
              </p>
            </div>
            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 md:w-8 md:h-8 text-[#264653]" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
                Trusted Platform
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Asia's most visited and trusted crowdfunding platform with
                secure payment processing.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
      initial={{ y: 100, opacity: 0}}
      whileInView={{ y: 0, opacity: 1}}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-10 md:py-16 bg-gradient-to-r from-emerald-500 to-emerald-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
              Start Your Fundraiser Today
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8">
              Join thousands of individuals and organizations who have
              successfully raised funds on Sahyog.
            </p>
            <Link to="/">
              <button className="bg-white text-[#264653] px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold flex items-center mx-auto hover:bg-blue-50 transition-colors cursor-pointer text-sm md:text-base">
                Start Fundraising
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default AboutUs;
