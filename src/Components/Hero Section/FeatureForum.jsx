import { Link } from "react-router-dom";

export const FeatureForum = ({ feature }) => {
  return (
    <div className="flex flex-col h-64 p-6 max-h-64 bg-slate-50 rounded-2xl">
      <div className="space-y-1">
        <div className="bg-gray-300 rounded-full badge">{feature.tag}</div>
        <p className="text-lg font-semibold">{feature.postTitle}</p>
        <p className="text-base font-light">
          Written By <strong>{feature.authorName}</strong>
        </p>
      </div>
      <div className="flex flex-row items-center justify-between p-2 mt-auto text-lg bg-gray-200 rounded-md">
        <div>
          <strong>🔥 {feature.totalUpvote}+</strong>
        </div>
        <div>
          <strong>{feature.totalComments}+ Comments</strong>
        </div>
        <Link
          to={`/forumdetails/${feature._id}`}
          className="w-1/3 py-2 text-lg text-center text-white rounded-md bg-slate-800"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
