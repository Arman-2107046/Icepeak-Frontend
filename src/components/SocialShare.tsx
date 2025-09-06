import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

interface ShareProps {
  title: string;
  url: string;
}

export default function SocialShare({ title, url }: ShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  return (
    <div className="flex items-center gap-4 mt-6">
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
        title="Share on Facebook"
      >
        <FaFacebookF />
      </a>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-white bg-blue-400 rounded-full hover:bg-blue-500"
        title="Share on Twitter"
      >
        <FaTwitter />
      </a>

      <a
        href={shareLinks.pinterest}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-white bg-red-600 rounded-full hover:bg-red-700"
        title="Share on Pinterest"
      >
        <FaPinterestP />
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-white bg-blue-800 rounded-full hover:bg-blue-900"
        title="Share on LinkedIn"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
}
