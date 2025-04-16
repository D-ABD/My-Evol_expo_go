import React from 'react';
import { View, ViewProps } from 'react-native';

import { shadowStyle } from '../../utils/shadow';

type CardProps = ViewProps & {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, style, className, ...props }: CardProps) => {
  return (
    <View
      className={`rounded-xl bg-white p-4 dark:bg-neutral-900 ${className || ''}`}
      style={[shadowStyle, style]}
      {...props}>
      {children}
    </View>
  );
};

export default Card;
