import { SearchIcon } from '@components/assets/main';
import React from 'react';
import {
  FaFacebook,
  FaYoutube,
  FaTelegram,
  FaGraduationCap,
  FaGithub,
  FaLightbulb,
} from 'react-icons/fa';
import { FaSquareXTwitter, FaCode, FaLinkedinIn } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import {
  MdComputer,
  MdOutlineCampaign,
  MdOutlineShoppingCartCheckout,
  MdOutlineGroups,
} from 'react-icons/md';
import { TbSettingsCode } from 'react-icons/tb';
import { CiServer } from 'react-icons/ci';
import { RiSeoLine } from 'react-icons/ri';
import { IoMdMail } from 'react-icons/io';
import { IoCallOutline } from 'react-icons/io5';
import { HiTrendingUp } from 'react-icons/hi';
import { BiTargetLock } from 'react-icons/bi';

export default function Icon({ name, size, width, height, color, className }) {
  const props = {
    size,
    width,
    height,
    color,
    className,
  };

  switch (name) {
    // main
    case 'search':
      return <SearchIcon {...props} />;

    // social media
    case 'facebook':
      return <FaFacebook {...props} />;
    case 'twitter':
      return <FaSquareXTwitter {...props} />;
    case 'instagram':
      return <AiFillInstagram {...props} />;
    case 'youtube':
      return <FaYoutube {...props} />;
    case 'mail':
      return <IoMdMail {...props} />;
    case 'telegram':
      return <FaTelegram {...props} />;
    case 'call':
      return <IoCallOutline {...props} />;
    case 'code':
      return <FaCode {...props} />;
    case 'cms':
      return <TbSettingsCode {...props} />;
    case 'server':
      return <CiServer {...props} />;
    case 'seo':
      return <RiSeoLine {...props} />;
    case 'study':
      return <FaGraduationCap {...props} />;
    case 'app':
      return <MdComputer {...props} />;
    case 'github':
      return <FaGithub {...props} />;
    case 'linkdink':
      return <FaLinkedinIn {...props} />;
    case 'plan':
      return <HiTrendingUp {...props} />;
    case 'campaign':
      return <MdOutlineCampaign {...props} />;
    case 'light':
      return <FaLightbulb {...props} />;
    case 'target':
      return <BiTargetLock {...props} />;
    case 'cart':
      return <MdOutlineShoppingCartCheckout {...props} />;
    case 'group':
      return <MdOutlineGroups {...props} />;
    default:
      return null;
  }
}
