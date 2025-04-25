interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div className="bg-[#0d0d0d] px-3 py-2 rounded-lg shadow-inner backdrop-blur-sm">
      <p className="text-sm font-medium text-white">{name}</p>
    </div>
  );
}
