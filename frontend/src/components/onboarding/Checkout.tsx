import React from "react";
import { Typography, Stack, Divider } from "@mui/material";
import { GoHome } from "react-icons/go";
import { FiCopy } from "react-icons/fi";

const Checkout = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <Typography variant="h4">Checkout</Typography>
      </div>
      <div className="flex justify-center">
        <Typography variant="body2">
          Payment for installation of field sensors
        </Typography>
      </div>

      <div className="flex justify-center mt-16 mx-5">
        <Stack spacing={2}>
          <Stack direction="row" spacing={25}>
            <div>Logo</div>
            <div>
              <Stack spacing={1}>
                <div>
                  <Typography className="text-[#A6A9A5]" variant="caption">
                    johndoe@gmail.com
                  </Typography>
                </div>
                <div>
                  <Typography variant="subtitle2" className="font-black">
                    Pay <span className="text-[#30D42B]">#56000</span>
                  </Typography>
                </div>
              </Stack>
            </div>
          </Stack>

          <div className="flex flex-col">
            <Typography variant="caption" className="text-[#A6A9A5]">
              Bank name
            </Typography>
            <Typography variant="subtitle2" className="font-black">
              Paystack
            </Typography>
          </div>

          <Divider variant="middle" />

          <Stack spacing={28} direction="row">
            <div className="flex flex-col">
              <Typography variant="caption" className="text-[#A6A9A5]">
                Account number
              </Typography>
              <Typography variant="subtitle2" className="font-black">
                1234567890
              </Typography>
            </div>
            <div>
              <FiCopy />
            </div>
          </Stack>

          <Divider variant="middle" />

          <Stack spacing={32} direction="row">
            <div className="flex flex-col">
              <Typography variant="caption" className="text-[#A6A9A5]">
                Amount
              </Typography>
              <Typography variant="subtitle2" className="font-black">
                #56,OOO
              </Typography>
            </div>
            <div className="flex justify-end">
              <FiCopy />
            </div>
          </Stack>

          <Divider variant="middle" />

          <div className="flex justify-center">
            <div className="flex flex-col">
              <Typography variant="subtitle2" className="font-black">
                Use this account for the transfer
              </Typography>

              <div className="flex justify-center mt-3">
                <button className="w-10 h-10 rounded-full border-2 border-[#30D42B] flex items-center justify-center ">
                  <GoHome style={{ color: "#30D42B" }} />
                </button>
              </div>
            </div>
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default Checkout;
