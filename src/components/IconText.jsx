import { Icon as LucideIcon } from 'lucide-react';

/**
 * IconText
 *
 * Props:
 * - Icon: React component (from 'lucide-react') OR iconNode object (from '@lucide/lab')
 * - Library: 'default' (lucide-react) or 'lab' (iconNode). case-sensitive.
 * - IconClass: optional string with Tailwind classes for sizing, e.g. "w-5 h-5"
 * - Text: string to show
 * - classNameText, classNameWrapper: tailwind classes
 *
 * Usage examples:
 *  <IconText Icon={Umbrella} IconClass="w-10 h-10" Text="20%" classNameText="text-lg" classNameWrapper="row-start-2" />
 *  <IconText Icon={hatBaseball} IconClass="w-10 h-10" Library="lab" Text="Cap" />
 */

function IconText ({   Icon,
                       Library = "default",
                       IconClass = "w-5 h-5",
                       Text = "",
                       classNameText = "text-base",
                       classNameWrapper = "",
}) {
    if (Library === "default") {
        return (
            <div className={`flex items-center gap-2 ${classNameWrapper}`}>
                <Icon className={IconClass}/>
                <span className={`${classNameText}`}>{Text}</span>
            </div>
        );
    }
    else if (Library === "lab") {
        return (
            <div className={`flex items-center gap-2 ${classNameWrapper}`}>
                <LucideIcon iconNode={Icon} className={IconClass}/>
                <span className={`${classNameText}`}>{Text}</span>
            </div>
        );
    }
 }

export default IconText;