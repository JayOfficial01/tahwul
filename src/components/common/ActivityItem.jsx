function ActivityItem({ title, user, time }) {
  return (
    <div className="flex gap-3 border-l-2 border-red-500 pl-4 py-1">
      <div className="space-y-1">
        <p className="text-xs font-medium text-slate-700">{title}</p>
        <p className="text-[10px] text-slate-500">
          By {user} • {time}
        </p>
      </div>
    </div>
  );
}

export default ActivityItem;
