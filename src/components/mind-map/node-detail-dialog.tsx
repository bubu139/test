'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MindMapNode } from '@/types/mindmap';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import { Loader, Sparkles, PencilRuler, BrainCircuit } from 'lucide-react';
import { Separator } from '../ui/separator';

type NodeDetailDialogProps = {
  node: MindMapNode;
  isOpen: boolean;
  onClose: () => void;
};

export function NodeDetailDialog({ node, isOpen, onClose }: NodeDetailDialogProps) {
  const [summary, setSummary] = useState('');
  const [exercises, setExercises] = useState('');
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);
  const [isExercisesLoading, setIsExercisesLoading] = useState(false);

  useEffect(() => {
    if (isOpen && node) {
      // Reset states on open
      setSummary('');
      setExercises('');
      
      const fetchSummary = async () => {
        setIsSummaryLoading(true);
        try {
          const response = await fetch('/api/summarize-topic', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic: node.label }),
          });
          if (!response.ok) throw new Error('Failed to fetch summary');
          const data = await response.json();
          setSummary(data.summary);
        } catch (error) {
          console.error('Error fetching summary:', error);
          setSummary('Không thể tải tóm tắt kiến thức. Vui lòng thử lại.');
        } finally {
          setIsSummaryLoading(false);
        }
      };

      fetchSummary();
    }
  }, [isOpen, node]);

  const handleGenerateExercises = async () => {
    setIsExercisesLoading(true);
    setExercises('');
    try {
      const response = await fetch('/api/generate-exercises', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: node.label }),
      });
      if (!response.ok) throw new Error('Failed to fetch exercises');
      const data = await response.json();
      setExercises(data.exercises);
    } catch (error) {
      console.error('Error fetching exercises:', error);
      setExercises('Không thể tạo bài tập. Vui lòng thử lại.');
    } finally {
      setIsExercisesLoading(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl h-[80vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="flex items-center gap-3 text-lg font-bold">
            <BrainCircuit className="w-6 h-6 text-primary"/>
            <ReactMarkdown remarkPlugins={[remarkMath]}>{node.label}</ReactMarkdown>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-1 px-6">
            <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed">
                <h3 className="flex items-center gap-2 font-semibold text-md mb-2"><Sparkles className="w-5 h-5 text-yellow-500" /> Kiến thức liên quan</h3>
                {isSummaryLoading ? (
                    <div className="flex items-center justify-center p-8">
                        <Loader className="animate-spin" />
                    </div>
                ) : (
                    <ReactMarkdown remarkPlugins={[remarkMath]}>{summary}</ReactMarkdown>
                )}

                <Separator className="my-6" />

                <h3 className="flex items-center gap-2 font-semibold text-md mb-4"><PencilRuler className="w-5 h-5 text-green-500" /> Bài tập vận dụng</h3>
                
                {isExercisesLoading ? (
                     <div className="flex items-center justify-center p-8">
                        <Loader className="animate-spin" />
                    </div>
                ) : exercises ? (
                    <div className="p-4 bg-muted/50 rounded-lg border">
                        <ReactMarkdown remarkPlugins={[remarkMath]}>{exercises}</ReactMarkdown>
                    </div>
                ) : (
                    <div className="text-center text-gray-500 italic p-4">
                        Nhấn nút bên dưới để tạo bài tập.
                    </div>
                )}
            </div>
        </ScrollArea>
        <DialogFooter className="p-6 pt-4 border-t bg-background">
          <Button onClick={handleGenerateExercises} disabled={isExercisesLoading}>
            {isExercisesLoading ? <Loader className="animate-spin mr-2" /> : <Sparkles className="mr-2" />}
            {isExercisesLoading ? "Đang tạo..." : "Tạo bài tập mới"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
