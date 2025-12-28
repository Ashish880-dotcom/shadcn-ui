import React from 'react'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'
const page = () => {
  return (
    <Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
    </EmptyMedia>
    <EmptyTitle>No data</EmptyTitle>
    <EmptyDescription>No data found</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Add data</Button>
  </EmptyContent>
</Empty>
  )
}

export default page