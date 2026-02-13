
import React, { useState, useMemo } from 'react';

interface Review {
  id: string;
  name: string;
  rating: number;
  title: string;
  body: string;
  date: string;
  verified: boolean;
}

const INITIAL_REVIEWS: Review[] = [
  { id: '1', name: "David S.", rating: 5, title: "Cleanest Energy Yet", body: "I've tried almost every shilajit brand on the market. Most are gritty or taste like burnt rubber. Neuroveda is smooth, dissolves perfectly, and gives me a steady focus for my 10-hour shifts.", date: "Feb 14, 2024", verified: true },
  { id: '2', name: "Elena Martinez", rating: 5, title: "A Morning Essential", body: "I replace my second cup of coffee with this resin in warm water. My brain fog cleared up within the first week. The transparency with their lab results is why I'm a subscriber.", date: "Feb 12, 2024", verified: true },
  { id: '3', name: "Jamal Williams", rating: 4, title: "Great for Recovery", body: "As an endurance athlete, I use this for mineral replenishment. Recovery times feel shorter. The taste is intense but you get used to it quickly. Real deal.", date: "Feb 10, 2024", verified: true },
  { id: '4', name: "Chloe Bennett", rating: 5, title: "Pure Gold", body: "Finally a brand that respects the source. You can tell this is harvested at high altitude just by the texture. My skin has actually cleared up too, which was an unexpected bonus!", date: "Feb 08, 2024", verified: true },
  { id: '5', name: "Wei Zhang", rating: 5, title: "Better than anticipated", body: "The shipping was fast and the packaging is beautiful. Most importantly, the fulvic acid content is clearly high. I feel a distinct 'lift' about 20 minutes after taking it.", date: "Feb 05, 2024", verified: true },
  { id: '6', name: "Sarah Jenkins", rating: 5, title: "Lifesaver for focus", body: "I'm a PhD student and need to stay sharp. This resin is my secret weapon. No jitters, just pure cognitive clarity. Truly premium product.", date: "Feb 02, 2024", verified: true },
  { id: '7', name: "Roberto G.", rating: 5, title: "Authentic Quality", body: "My grandfather used shilajit in the Himalayas. I showed him this and he confirmed it's the real resin, not the diluted powder stuff others sell. High quality.", date: "Jan 30, 2024", verified: true },
  { id: '8', name: "Karen P.", rating: 4, title: "Solid product", body: "Effective and potent. I wish the jar was slightly larger for the price, but you get what you pay for in terms of purity. Definitely noticing better sleep cycles.", date: "Jan 28, 2024", verified: true },
  { id: '9', name: "Deshawn Watkins", rating: 5, title: "Game Changer", body: "I'm 45 and was feeling a bit sluggish lately. Two weeks on Neuroveda and my vitality feels like it's back to my 30s levels. Highly recommend the subscription.", date: "Jan 25, 2024", verified: true },
  { id: '10', name: "Priya S.", rating: 5, title: "Deeply satisfied", body: "The mineral profile is impressive. I appreciate the batch-specific lab reports. It's rare to find such transparency in the supplement world today.", date: "Jan 22, 2024", verified: true },
  { id: '11', name: "Michael Reed", rating: 5, title: "Top Notch", body: "Consistent quality every month. I mix it with a little raw honey and it's my favorite morning ritual. Exceptional energy levels.", date: "Jan 20, 2024", verified: true },
  { id: '12', name: "Lindsey O'Brien", rating: 5, title: "Remarkable", body: "I was skeptical but the difference in my metabolic health and energy is night and day. It's an investment in your health that pays off immediately.", date: "Jan 18, 2024", verified: true },
  { id: '13', name: "Aaron Fischer", rating: 4, title: "Potent resin", body: "Definitely feel the effects. Be careful not to take it too late in the evening or you'll be too energized to sleep! 5 stars for potency.", date: "Jan 15, 2024", verified: true },
  { id: '14', name: "Sasha V.", rating: 5, title: "Simply the best", body: "I've done the research. This is the highest purity shilajit available to the public. Don't waste money on the cheap imitators.", date: "Jan 12, 2024", verified: true },
  { id: '15', name: "Jordan Taylor", rating: 5, title: "Helps with mood too", body: "I noticed a significant improvement in my overall mood and stress response. These minerals are essential for the nervous system.", date: "Jan 10, 2024", verified: true },
  { id: '16', name: "Emily Nguyen", rating: 5, title: "Great taste profile", body: "For shilajit, this has a very 'clean' taste. Not overly smokey. It's clearly been purified correctly with water as they claim.", date: "Jan 08, 2024", verified: true },
  { id: '17', name: "Chris H.", rating: 5, title: "No more afternoon slump", body: "I used to crash at 3 PM every day. Since starting Neuroveda, I have steady energy until I go to bed. Life changing for a busy dad.", date: "Jan 05, 2024", verified: true },
  { id: '18', name: "Maya Patel", rating: 4, title: "Authentic and Pure", body: "The texture is exactly what you want—pliable and resinous. It takes a minute to dissolve but the wait is worth it for the quality.", date: "Jan 02, 2024", verified: true },
  { id: '19', name: "Tyler R.", rating: 5, title: "Superior Sourcing", body: "I love that they harvest from 16,000+ feet. You can't beat the mineral density of high-altitude Himalayan shilajit.", date: "Dec 28, 2023", verified: true },
  { id: '20', name: "Sophia Lopez", rating: 5, title: "My daily ritual", body: "I look forward to my shilajit water every morning. It feels like I'm grounding myself before the chaos of the day begins.", date: "Dec 25, 2023", verified: true },
  { id: '21', name: "Brad Miller", rating: 5, title: "Unbeatable Energy", body: "Better than any pre-workout I've used. Natural, clean, and no heart racing. Just power.", date: "Dec 22, 2023", verified: true },
  { id: '22', name: "Hannah G.", rating: 5, title: "Trustworthy Brand", body: "In a world of fake supplements, Neuroveda is a breath of fresh air. The lab tests are the real deal.", date: "Dec 20, 2023", verified: true },
  { id: '23', name: "Justin K.", rating: 5, title: "Excellent", body: "The 3-pack bundle is the way to go. Best value for the highest quality resin on the market.", date: "Dec 18, 2023", verified: true },
  { id: '24', name: "Olivia W.", rating: 5, title: "Fulvic Acid Win", body: "My absorption of other vitamins has improved. I can feel my body utilizing nutrients better. Essential for wellness.", date: "Dec 15, 2023", verified: true },
  { id: '25', name: "Nate D.", rating: 5, title: "Highly recommend", body: "If you're on the fence, just try one jar. You'll feel the difference in 3 days. I'm now a lifetime customer.", date: "Dec 12, 2023", verified: true },
  { id: '26', name: "Isabella R.", rating: 4, title: "Strong but good", body: "It's a strong flavor, but that's how you know it's real. My energy levels haven't been this high in years.", date: "Dec 10, 2023", verified: true },
  { id: '27', name: "Kevin Smith", rating: 5, title: "Perfect product", body: "The consistency is perfect. Not too hard, not too runny. Just high-quality mountain resin.", date: "Dec 08, 2023", verified: true },
  { id: '28', name: "Rachel Adams", rating: 5, title: "Immune boost", body: "I've stayed healthy all winter while everyone around me was getting sick. I attribute it to these trace minerals.", date: "Dec 05, 2023", verified: true },
  { id: '29', name: "Sam Wilson", rating: 5, title: "Daily staple", body: "Can't imagine my routine without it now. The mental clarity is just too good to give up.", date: "Dec 02, 2023", verified: true },
  { id: '30', name: "Jessica M.", rating: 5, title: "Top of the line", body: "Beautiful branding, even better product. You can tell they care about every detail of the customer experience.", date: "Nov 30, 2023", verified: true }
];

export const ProductReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'recent' | 'highest' | 'lowest'>('recent');
  const [filterVerified, setFilterVerified] = useState(false);

  // Form State
  const [formRating, setFormRating] = useState(0);
  const [formTitle, setFormTitle] = useState('');
  const [formComment, setFormComment] = useState('');
  const [formName, setFormName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const filteredReviews = useMemo(() => {
    let result = [...reviews];
    if (filterVerified) result = result.filter(r => r.verified);
    
    if (sortBy === 'highest') result.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'lowest') result.sort((a, b) => a.rating - b.rating);
    else result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return result;
  }, [reviews, sortBy, filterVerified]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const newReview: Review = {
        id: Math.random().toString(36),
        name: formName || "Anonymous",
        rating: formRating,
        title: formTitle,
        body: formComment,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        verified: false
      };
      
      setReviews([newReview, ...reviews]);
      setIsSubmitting(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        setIsModalOpen(false);
        setShowSuccess(false);
        setFormRating(0);
        setFormTitle('');
        setFormComment('');
        setFormName('');
      }, 1500);
    }, 1000);
  };

  return (
    <section className="py-16 lg:py-24 border-t border-charcoal/5">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Column: Summary */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-serif font-bold uppercase tracking-tight mb-2">Testimonials</h2>
              <p className="text-charcoal/50 text-sm font-light italic">Real routines. Real results.*</p>
            </div>

            <div className="p-8 rounded-[24px] bg-mutedParchment border border-charcoal/5">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-5xl font-serif font-bold">4.9</span>
                <div>
                  <div className="flex text-primary mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">2,482 Reviews</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  { star: 5, percent: 92 },
                  { star: 4, percent: 6 },
                  { star: 3, percent: 1 },
                  { star: 2, percent: 0.5 },
                  { star: 1, percent: 0.5 },
                ].map((row) => (
                  <div key={row.star} className="flex items-center space-x-3 text-[10px] font-bold">
                    <span className="w-3">{row.star}</span>
                    <div className="flex-1 h-1 bg-charcoal/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${row.percent}%` }} />
                    </div>
                    <span className="w-8 text-right opacity-40">{row.percent}%</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full h-[56px] rounded-full border border-charcoal text-xs font-bold uppercase tracking-widest hover:bg-charcoal hover:text-white transition-all"
              >
                Write a review
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Reviews List */}
        <div className="lg:w-2/3">
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-charcoal/5">
            <div className="flex items-center space-x-6">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-[11px] font-bold uppercase tracking-widest outline-none cursor-pointer"
              >
                <option value="recent">Most Recent</option>
                <option value="highest">Highest Rated</option>
                <option value="lowest">Lowest Rated</option>
              </select>
              
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  checked={filterVerified}
                  onChange={() => setFilterVerified(!filterVerified)}
                  className="hidden"
                />
                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${filterVerified ? 'bg-primary border-primary' : 'border-charcoal/20 group-hover:border-primary'}`}>
                  {filterVerified && <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest opacity-60">Verified only</span>
              </label>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-widest opacity-30 italic">Showing {filteredReviews.length} reviews</p>
          </div>

          {/* Desktop List / Mobile Carousel */}
          <div className="flex lg:flex-col lg:space-y-6 gap-6 overflow-x-auto lg:overflow-visible no-scrollbar snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0">
            {filteredReviews.map((review) => (
              <div key={review.id} className="flex-shrink-0 w-[85vw] lg:w-full snap-center p-8 rounded-[22px] bg-white border border-charcoal/5 shadow-sm space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-3.5 h-3.5 fill-current ${i >= review.rating ? 'opacity-20' : ''}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <span className="text-[10px] opacity-30 font-bold uppercase tracking-widest">{review.date}</span>
                </div>
                
                <div>
                  <h4 className="font-serif font-bold text-lg mb-2 uppercase tracking-tight">{review.title}</h4>
                  <p className="text-sm text-charcoal/70 leading-relaxed font-light">{review.body}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest">{review.name}</span>
                    {review.verified && (
                      <span className="flex items-center text-[9px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-2 py-0.5 rounded">
                        <svg className="w-2 h-2 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-3 opacity-30 group">
                    <span className="text-[9px] font-bold uppercase tracking-widest">Helpful?</span>
                    <button className="text-[9px] font-bold hover:text-primary">Yes</button>
                    <button className="text-[9px] font-bold hover:text-primary">No</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal remains the same */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end lg:items-center justify-center p-0 lg:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full lg:max-w-xl bg-parchment rounded-t-[32px] lg:rounded-[32px] overflow-hidden shadow-2xl animate-in slide-in-from-bottom-10">
            {showSuccess ? (
              <div className="p-12 text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-serif font-bold uppercase tracking-tight">Thanks for your review!</h3>
                <p className="text-charcoal/60 font-light">Your feedback helps our community grow.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="p-8 lg:p-12 space-y-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-serif font-bold uppercase tracking-tight">New Review</h3>
                  <button type="button" onClick={() => setIsModalOpen(false)} className="opacity-40 hover:opacity-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                  </button>
                </div>

                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Your Rating*</p>
                  <div className="flex space-x-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button 
                        key={star} 
                        type="button"
                        onClick={() => setFormRating(star)}
                        onMouseEnter={() => !formRating && setFormRating(star)}
                        className={`transition-all ${star <= formRating ? 'text-primary scale-110' : 'text-charcoal/10 hover:text-primary/40'}`}
                      >
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <input 
                    type="text" 
                    placeholder="Review Title (Optional)"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    className="w-full bg-transparent border-b border-charcoal/10 py-3 text-sm focus:border-primary outline-none transition-colors"
                  />
                  <textarea 
                    placeholder="Share your experience (Min 20 characters)*"
                    required
                    value={formComment}
                    onChange={(e) => setFormComment(e.target.value)}
                    rows={4}
                    className="w-full bg-transparent border border-charcoal/10 rounded-2xl p-4 text-sm focus:border-primary outline-none transition-colors resize-none"
                  />
                  <div className="grid grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      placeholder="Display Name"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-transparent border-b border-charcoal/10 py-3 text-sm focus:border-primary outline-none transition-colors"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-charcoal/10 py-3 text-sm focus:border-primary outline-none transition-colors"
                    />
                  </div>
                </div>

                <button 
                  disabled={formRating === 0 || formComment.length < 20 || isSubmitting}
                  className="w-full h-[64px] rounded-full bg-primary text-white text-sm font-bold uppercase tracking-widest disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary/90 transition-all shadow-xl shadow-primary/10 flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <span>Submit Review</span>}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
