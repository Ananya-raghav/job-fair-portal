import { useState } from "react";
import { motion } from "framer-motion";

function RegistrationForm() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    skills: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Registration Successful 🚀");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Glass Card */}
      <div className="relative bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-96 border border-white/30">

        {/* Progress */}
        <div className="flex justify-between mb-6 text-white font-bold">
          <div className={step >= 1 ? "text-blue-300" : "text-gray-300"}>1</div>
          <div className={step >= 2 ? "text-blue-300" : "text-gray-300"}>2</div>
          <div className={step >= 3 ? "text-blue-300" : "text-gray-300"}>3</div>
        </div>

        <form onSubmit={handleSubmit}>

          {/* STEP 1 */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-white">
                Personal Info
              </h2>

              <input
                className="input"
                name="name"
                placeholder="👤 Full Name"
                onChange={handleChange}
                required
              />

              <input
                className="input"
                type="email"
                name="email"
                placeholder="📧 Email"
                onChange={handleChange}
                required
              />

              <div className="mt-6 flex justify-end">
                <button type="button" onClick={next} className="btn">
                  Next →
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-white">
                Contact Info
              </h2>

              <input
                className="input"
                name="phone"
                placeholder="📱 Phone"
                onChange={handleChange}
                required
              />

              <input
                className="input"
                name="college"
                placeholder="🏫 College"
                onChange={handleChange}
                required
              />

              <div className="flex justify-between mt-6">
                <button type="button" onClick={prev} className="btn-gray">
                  ← Back
                </button>
                <button type="button" onClick={next} className="btn">
                  Next →
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-white">
                Skills & Finish
              </h2>

              <select
                className="input"
                name="skills"
                onChange={handleChange}
                required
              >
                <option value="">Select Skill</option>
                <option>React</option>
                <option>Java</option>
                <option>Python</option>
              </select>

              <div className="flex justify-between mt-6">
                <button type="button" onClick={prev} className="btn-gray">
                  ← Back
                </button>

                <button type="submit" className="btn bg-green-600 hover:bg-green-700">
                  Submit 🚀
                </button>
              </div>
            </motion.div>
          )}

        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;