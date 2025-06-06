const MessageSkeleton = () => {
	return (
		<div className="space-y-4">
			{/* Incoming message skeleton */}
			<div className="flex gap-3 items-center">
				<div className="w-10 h-10 rounded-full bg-slate-700 animate-pulse shrink-0"></div>
				<div className="flex flex-col gap-2">
					<div className="h-4 w-40 bg-slate-700 rounded-md animate-pulse"></div>
					<div className="h-4 w-32 bg-slate-700 rounded-md animate-pulse"></div>
				</div>
			</div>

			{/* Outgoing message skeleton */}
			<div className="flex gap-3 items-center justify-end">
				<div className="flex flex-col gap-2 items-end">
					<div className="h-4 w-36 bg-slate-700 rounded-md animate-pulse"></div>
				</div>
				<div className="w-10 h-10 rounded-full bg-slate-700 animate-pulse shrink-0"></div>
			</div>
		</div>
	);
};

export default MessageSkeleton;
