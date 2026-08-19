import * as React from 'react'

export function Card({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`ui-card ${className}`} {...props} />
}

export function CardMedia({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`ui-card-media ${className}`} {...props} />
}

export function CardBody({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`ui-card-body ${className}`} {...props} />
}
