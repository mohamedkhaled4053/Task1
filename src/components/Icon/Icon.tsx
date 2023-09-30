import React, { useEffect, useState } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

// dynamically import svg by the name
export const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
  const [importedIcon, setImportedIcon] =
    useState<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        let importedIcon = (
          await import(
            `!!@svgr/webpack?-svgo,+titleProp,+ref!../../assets/svgs/${name}.svg`
          )
        ).default;
        setImportedIcon(importedIcon);
      } catch (err) {
        // error handling
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && importedIcon) {
    let SvgIcon = importedIcon;
    return <SvgIcon {...rest} />;
  }
  return null;
};
