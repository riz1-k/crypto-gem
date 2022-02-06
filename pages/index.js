import React,{Fragment} from "react";
import {
  Biotech,
  Bookmark,
  Diamond,
  KeyboardArrowDown,
  Share,
  Telegram,
  Twitter,
  Web,
  WhatsApp,
} from "@mui/icons-material";
import { GiMeshNetwork } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { AiOutlineFileSearch } from "react-icons/ai";
import { CgRing } from "react-icons/cg";
import { FaRecycle } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { BsTools } from "react-icons/bs";
import { Menu,Tab , Transition} from "@headlessui/react";

function Home() {
  const cryptos = [
    {
      name: "Cryptos",
      price: "15,784",
    },
    {
      name: "Cryptos",
      price: "15,784",
    },
    {
      name: "Cryptos",
      price: "15,784",
    },
    {
      name: "Cryptos",
      price: "15,784",
    },
    {
      name: "Cryptos",
      price: "15,784",
    },
    {
      name: "Cryptos",
      price: "15,784",
    },
    {
      name: "Cryptos",
      price: "15,784",
    },
    {
      name: "Cryptos",
      price: "15,784",
    },
    {
      name: "Cryptos",
      price: "15,784",
    },
    {
      name: "Cryptos",
      price: "15,784",
    },
  ];
  const sponsers = [
    {
      pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuSvvfwBBdzWuV4c9ertrSgGxpDgNXE0o0w&usqp=CAU",
      title: "Qanx",
      sale: "Live Trading",
      saleColor: "#3270FF",
      platform: "Defi  Platform",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .",
    },
    {
      pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuSvvfwBBdzWuV4c9ertrSgGxpDgNXE0o0w&usqp=CAU",
      title: "Qanx",
      sale: "Live Trading",
      saleColor: "#3270FF",
      platform: "Defi  Platform",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .",
    },
    {
      pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuSvvfwBBdzWuV4c9ertrSgGxpDgNXE0o0w&usqp=CAU",
      title: "Qanx",
      sale: "Live Trading",
      saleColor: "#3270FF",
      platform: "Defi  Platform",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .",
    },
    {
      pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuSvvfwBBdzWuV4c9ertrSgGxpDgNXE0o0w&usqp=CAU",
      title: "Qanx",
      sale: "Live Trading",
      saleColor: "#3270FF",
      platform: "Defi  Platform",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .",
    },
    {
      pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuSvvfwBBdzWuV4c9ertrSgGxpDgNXE0o0w&usqp=CAU",
      title: "Qanx",
      sale: "Live Trading",
      saleColor: "#3270FF",
      platform: "Defi  Platform",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .",
    },
    {
      pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuSvvfwBBdzWuV4c9ertrSgGxpDgNXE0o0w&usqp=CAU",
      title: "Qanx",
      sale: "Live Trading",
      saleColor: "#3270FF",
      platform: "Defi  Platform",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore .",
    },
  ];
  return (
    <>
      <div className=" grid grid-cols-sideBar">
        <nav className="text-[#9CFDFF] bg-[#242837] flex flex-col items-center text ">
          <div className="flex flex-col pt-8 pb-4">
            <Diamond className="text-6xl py-2 " />
            <p className="uppercase font-bold py-4 text-center text-white tracking-wider ">
              {" "}
              Crypto <br /> Gems
            </p>
          </div>

          <div className="flex flex-col py-3 cursor-pointer  items-center ">
            <MdDashboard className="text-[2.2rem] py-2  " />
            <p className="py-1 text-xs text-center font-sans  ">Dashboard</p>
          </div>
          <div className="flex flex-col py-3 cursor-pointer  items-center ">
            <AiOutlineFileSearch className="text-[2.2rem] py-2  " />
            <p className="py-1 text-xs text-center font-sans  ">Dex Explorer</p>
          </div>
          <div className="flex flex-col py-3 cursor-pointer  items-center ">
            <CgRing className="text-[2.2rem] py-2  " />
            <p className="py-1 text-xs text-center font-sans  ">
              Pair Explorer
            </p>
          </div>
          <div className="flex flex-col py-3 cursor-pointer  items-center ">
            <GiMeshNetwork className="text-[2.2rem] py-2  " />
            <p className="py-1 text-xs text-center font-sans  ">New Pairs</p>
          </div>
          <div className="flex flex-col py-3 cursor-pointer  items-center ">
            <FaRecycle className="text-[2.2rem] py-2  " />
            <p className="py-1 text-xs text-center font-sans  ">Big Swaps</p>
          </div>
          <div className="flex flex-col py-3 cursor-pointer  items-center ">
            <ImProfile className="text-[2.2rem] py-2  " />
            <p className="py-1 text-xs text-center font-sans  ">Portfolio</p>
          </div>
          <div className="flex flex-col py-4  items-center ">
            <BsTools className="text-[2.2rem] py-2  " />
            <p className="py-1 text-xs text-center font-mono  ">Tools</p>
          </div>
        </nav>
        <section>
          <section className="h-60 w-full">
            <div className="flex flex-col justify-center w-[95%] mx-auto ">
              <div className=" flex justify-around h-14 border-b-2 border-[#246177]  ">
                {cryptos.map((c) => {
                  return (
                    <div
                      key={c.price}
                      className="flex items-center font-semibold "
                    >
                      <p className="text-[#09CBD5]">{c.name}:</p>
                      <p className="text-white ml-2"> {c.price}</p>
                    </div>
                  );
                })}
              </div>
              <div className="py-6">
                <img
                  className="h-28 w-[50%] mx-auto rounded-xl flex justify-center items-center"
                  src="data:image/jpeg;base64,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"
                  alt="ad"
                />
              </div>
              <div></div>
            </div>
          </section>
          <section className=" flex items-center justify-around h-20 bg-[#242837]  font-semibold ">
            <div className="flex ">
              <button className="text-[#2B2F40] uppercase bg-[#00E8F2] font-bold rounded-md text-sm px-3 ">
                penny token
              </button>
              <p className="text-gray-400 bg-[#242837]  pl-4  py-1">
                The global crypto market cap is $2.22T, a 3.44% increase over
                the last day.
              </p>
            </div>
            <div className="flex items-center bg-[#242837]  ">
              <p className="text-gray-400 bg-[#242837] pr-4 ">
                Download the Crypto Gems Mobile App to keep updated
              </p>
              <button className="text-white bg-red-500 px-3 py-2 rounded-md  font-semibold">
                Coming Soon
              </button>
            </div>
            <div className="flex ">
            <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-6 py-4 text-sm font-medium bg-[#00E8F2] text-gray-900 rounded-md hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            BSC
            <KeyboardArrowDown
              className="w-5 h-5 ml-2 -mr-1 text-gray-800 hover:text-gray-900"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-[#58F8FF] text-gray-900' : 'text-gray-900'
                    } group flex rounded-md items-center font-semibold w-full px-2 py-2 text-sm`}
                  >
                    BSC
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-[#58F8FF] text-gray-900' : 'text-gray-900'
                    } group flex rounded-md items-center font-semibold w-full px-2 py-2 text-sm`}
                  >
                    ETH
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-[#58F8FF] text-gray-900' : 'text-gray-900'
                    } group flex rounded-md items-center font-semibold w-full px-2 py-2 text-sm`}
                  >
                    BASIC
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-[#58F8FF] text-gray-900' : 'text-gray-900'
                    } group flex rounded-md items-center font-semibold w-full px-2 py-2 text-sm`}
                  >
                    ONE
                  </button>
                )}
              </Menu.Item>
              </div>
                </Menu.Items>
                </Transition>
                </Menu>
             
              <button className="text-[#2B2F40] uppercase bg-[#00E8F2] font-semibold rounded-full text-large px-4 py-3 ml-4  ">
                Connect
              </button>
            </div>
          </section>
          <section className="grid grid-cols-homepage ">
            <div className="w-[90%] mx-auto">
              <section>
                <div className="flex flex-col w-[95%] mx-auto justify-center">
                  <h2 className="font-semibold text-gray-400 py-4">
                    Search any Cryto
                  </h2>
                  <input
                    className=" flex justify-center outline-none py-2  px-10 border-[1px] border-[#00E8F2] bg-[#242837] bg rounded-full placeholder:text-gray-500"
                    placeholder="Bitcoin."
                  />
                </div>
              </section>
              <section className="flex  flex-col items-start  rounded-xl py-6 mt-8 ">
                <div className="flex justify-between py-1 w-[90%] mx-auto  ">
                  <h1 className=" flex items-center  text-lg uppercase font-semibold text-white ">
                    WBNM / DEXT
                    <div className="flex ml-2">
                      <Twitter className="mx-1 text-gray-400 text-lg cursor-pointer" />
                      <Telegram className="mx-1 text-gray-400 text-lg cursor-pointer" />
                      <WhatsApp className="mx-1 text-gray-400 text-lg cursor-pointer" />
                      <Web className="mx-1 text-gray-400 text-lg cursor-pointer" />
                    </div>
                  </h1>
                  <p className="text-lg font-semibold text-green-500">
                    $0.4454186
                  </p>
                </div>
                <p className="text-xs text-[#00E8F2] py-1 w-[90%] mx-auto  ">
                  Token contract : 0xe91a8d...96e3
                </p>

                <div className=" py-6 w-ful flex flex-col w-[90%] mx-auto   ">
                  <div className="flex justify-between text-gray-400 py-1 text-xs ">
                    <h6>Daily Volume</h6>
                    <p>$0.25,631</p>
                  </div>
                  <div className="flex justify-between text-gray-400 py-1 text-xs ">
                    <h6>Daily Volume</h6>
                    <p>$0.25,631</p>
                  </div>
                  <div className="flex justify-between text-gray-400 py-1 text-xs ">
                    <h6>Daily Volume</h6>
                    <p>$0.25,631</p>
                  </div>
                  <div className="flex justify-between text-gray-400 py-1 text-xs ">
                    <h6>Daily Volume</h6>
                    <p>$0.25,631</p>
                  </div>
                  <div className="flex justify-between text-gray-400 py-1 text-xs ">
                    <h6>Daily Volume</h6>
                    <p>$0.25,631</p>
                  </div>
                </div>
                <section className="w-full bg-[#303342] shadow-md py-4 rounded-lg ">
                  <div className="w-[90%] mx-auto mt-4   ">
                    <div className="flex justify-between py-2 text-sm ">
                      <div className="flex flex-col">
                        <h5 className="text-[#9197A9] font-semibold">
                          Crypto Gem Score
                        </h5>
                        <p className="text-base text-[#13CAE6] flex justify-end ">
                          {" "}
                          85
                        </p>
                      </div>
                      <button className="px-3 py-1 text-[#13CAE6] shadow-lg bg-[#3d4052]  rounded-lg items-center flex justify-center ">
                        {" "}
                        More Details{" "}
                      </button>
                    </div>
                    <div className="flex flex-col w-28 py-12 ">
                      <h5 className="text-[#9197A9] text-sm font-semibold">
                        Contract Details
                      </h5>
                      <div className="text-base text-[#13CAE6] flex justify-end ">
                        <Diamond className="px-1 text-3xl" />
                        <Biotech className="px-1 text-3xl" />
                      </div>
                    </div>
                    <div className="flex justify-around px-2 py-4 ">
                      <button className="px-6 py-2 text-sm  text-[#13CAE6] shadow-lg bg-[#3d4052]   rounded-xl items-center flex justify-center ">
                        {" "}
                        Share <Share className="pl-1 bg-[#3d4052]" />{" "}
                      </button>
                      <button className="px-6 py-2 text-sm text-[#13CAE6] shadow-lg bg-[#3d4052]   rounded-xl items-center flex justify-center ">
                        {" "}
                        Save <Bookmark className="pl-1 bg-[#3d4052]" />{" "}
                      </button>
                      <button className="px-6 py-2 text-sm  text-[#13CAE6] shadow-lg bg-[#3d4052]   rounded-xl items-center flex justify-center ">
                        {" "}
                        BUY / SELL
                      </button>
                    </div>
                  </div>
                </section>
              </section>
              <section className="flex flex-col w-full bg-[#242837] mt-10 p-6 rounded-lg ">
                <h1 className="text-xl font-bold text-[#13CAE6] pb-6 ">
                  Featured Sponsors
                </h1>
                {sponsers.map((s) => (
                  <div key={s.title} className="flex flex-row py-4 ">
                    <img
                      className="h-10 w-10 rounded-full flex items-start mx-2 "
                      src={s.pfp}
                      alt={s.title}
                    />
                    <div className="flex flex-col py-1  ">
                      <div className="flex justify-start">
                        <h1 className="text-base text-white font-semibold uppercase ">
                          {s.title}
                        </h1>
                        <p
                          style={{ backgroundColor: s.saleColor }}
                          className="text-[11px] text-white ml-2 px-3  rounded-xl flex justify-center items-center "
                        >
                          {s.sale}
                        </p>
                      </div>
                      <div className="flex justify-start py-1">
                        <p className=" text-sm text-white font-medium ">
                          {s.platform}
                        </p>
                        <div className="text-xs text-[#13CAE6] ml-2 ">
                          <Twitter className="px-1" />
                          <Telegram className="px-1" />
                        </div>
                      </div>
                      <p className="py-1 text-gray-400 text-sm ">{s.details}</p>
                    </div>
                  </div>
                ))}
              </section>
            </div>
            <div className="w-[95%] mx-auto mt-4 ">
              <div className="flex justify-between  ">
                <section className="flex items-center justify-around w-[60%]  px-2 bg-[#242837] rounded-xl ">
                  <h1 className="text-xl font-bold text-[#13CAE6] ">
                    Top Sponsor
                  </h1>

                  <div className="flex flex-col py-1  ">
                    <div className="flex justify-start">
                      <h1 className="text-base text-white font-semibold uppercase ">
                        QANX
                      </h1>
                      <p
                        style={{ color: "green" }}
                        className="text-[11px] text-white ml-2 px-3  rounded-xl flex justify-center items-center "
                      >
                        Presale
                      </p>
                    </div>
                    <div className="flex justify-start py-1">
                      <p className=" text-sm text-white font-medium ">
                        Defi Platform
                      </p>
                      <div className="text-xs text-[#13CAE6] ml-2 ">
                        <Twitter className="px-1" />
                        <Telegram className="px-1" />
                      </div>
                    </div>
                  </div>
                  <p className=" text-sm text-white font-medium w-52">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore .
                  </p>
                </section>
                <div className="w-[35%] flex items-center ">
                  <img
                    className="h-32 w-full  rounded-xl "
                    src="data:image/jpeg;base64,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"
                    alt="ad"
                  />
                </div>
              </div>
              <section className="mt-6 bg-[#303342] shadow-md rounded-lg ">
                <Tab.Group className="p-6">
                  <Tab.List>
                    <Tab className=" mx-2  px-4 rounded-lg py-2 text-[#13CAE6] shadow-lg bg-[#3d4052] ">
                      Token TX
                    </Tab>
                    <Tab className=" mx-2  px-4 rounded-lg py-2 text-[#13CAE6] font-semibold ">
                      Walet TX
                    </Tab>
                    <Tab className=" mx-2  px-4 rounded-lg py-2 text-[#13CAE6] font-semibold ">
                      Buyers
                    </Tab>
                    <Tab className=" mx-2  px-4 rounded-lg py-2 text-[#13CAE6] font-semibold ">
                      Sellers
                    </Tab>
                  </Tab.List>
                </Tab.Group>
                <div className="shadow overflow-hidden">
                  <table className="min-w-full ">
                    <thead>
                      <tr>
                        <th className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-gray-400 uppercase tracking-wider">
                                Order
                              </div>
                            </div>
                          </div>
                        </th>
                        <th className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-gray-400 uppercase tracking-wider">
                                Tokens
                              </div>
                            </div>
                          </div>
                        </th>
                        <th className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-gray-400 uppercase tracking-wider">
                                Price
                              </div>
                            </div>
                          </div>
                        </th>
                        <th className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-gray-400 uppercase tracking-wider">
                                Price / Token
                              </div>
                            </div>
                          </div>
                        </th>
                        <th className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-gray-400 uppercase tracking-wider">
                                Time
                              </div>
                            </div>
                          </div>
                        </th>
                        <th className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-gray-400 uppercase tracking-wider">
                                TX
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">Buy</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                9,9999 ORB
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                $0.90 (0.0005BNB)
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                $0.0002
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                6:12PM
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                0x654 (Track)
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-[#242837]">
                        <td className="px-4  py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">Sell</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                9,9999 ORB
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                $0.90 (0.0005BNB)
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                $0.0002
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">6:12PM</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                0x654 (Track)
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">Buy</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                9,9999 ORB
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                $0.90 (0.0005BNB)
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                $0.0002
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                6:12PM
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                0x654 (Track)
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-[#242837]">
                        <td className="px-4  py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">Sell</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                9,9999 ORB
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                $0.90 (0.0005BNB)
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                $0.0002
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">6:12PM</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                0x654 (Track)
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">Buy</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                9,9999 ORB
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                $0.90 (0.0005BNB)
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                $0.0002
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                6:12PM
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                0x654 (Track)
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-[#242837]">
                        <td className="px-4  py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">Sell</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                9,9999 ORB
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                $0.90 (0.0005BNB)
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                $0.0002
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">6:12PM</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                0x654 (Track)
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">Buy</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                9,9999 ORB
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                $0.90 (0.0005BNB)
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                $0.0002
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                6:12PM
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                0x654 (Track)
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-[#242837]">
                        <td className="px-4  py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">Sell</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                9,9999 ORB
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                $0.90 (0.0005BNB)
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                $0.0002
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">6:12PM</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                0x654 (Track)
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">Buy</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                9,9999 ORB
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                $0.90 (0.0005BNB)
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                $0.0002
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                6:12PM
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-green-400">
                                0x654 (Track)
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-[#242837]">
                        <td className="px-4  py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">Sell</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                9,9999 ORB
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                $0.90 (0.0005BNB)
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                $0.0002
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">6:12PM</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-red-500">
                                0x654 (Track)
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default Home;
