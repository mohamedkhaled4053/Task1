import React, { useEffect, useRef, useState } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

// dynamically import svg by the name
export const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (
          await import(
            `!!@svgr/webpack?-svgo,+titleProp,+ref!../../assets/svgs/${name}.svg`
          )
        ).default;
      } catch (err) {
        // error handling
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    let SvgIcon = ImportedIconRef.current;
    return <SvgIcon {...rest} />;
  }
  return null;
};
