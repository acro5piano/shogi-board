import * as React from 'react'

interface PieceProps {
  name: string
}

export default function Piece({ name }: PieceProps) {
  return <div>{name}</div>
}
