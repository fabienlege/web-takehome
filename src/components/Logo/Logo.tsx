import React from 'react';
import ClubLogo from '../../icons/club-logo.svg';
import { ILogoProps } from './interfaces/ILogoProps';

const Logo: React.FC<ILogoProps> = ({ className, width = 'auto', height = 'auto' }) => {
  return (<ClubLogo className={className} width={width} height={height} />);
}
export default Logo;